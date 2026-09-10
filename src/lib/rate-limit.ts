import { LRUCache } from "lru-cache";

// Rate limiter simples por IP usando LRU Cache
// Configuração: máximo de 5 requisições por janela de 10 minutos por IP

type RateLimitOptions = {
  interval: number; // janela em ms
  limit: number;    // máximo de requisições por janela
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

export function createRateLimiter(options: RateLimitOptions) {
  const cache = new LRUCache<string, RateLimitEntry>({
    max: 500, // máximo de 500 IPs rastreados simultaneamente
    ttl: options.interval,
  });

  return {
    check(identifier: string): { success: boolean; remaining: number; resetAt: number } {
      const now = Date.now();
      const existing = cache.get(identifier);

      if (!existing || now > existing.resetAt) {
        // Primeira requisição ou janela expirou
        const entry: RateLimitEntry = {
          count: 1,
          resetAt: now + options.interval,
        };
        cache.set(identifier, entry);
        return { success: true, remaining: options.limit - 1, resetAt: entry.resetAt };
      }

      if (existing.count >= options.limit) {
        // Limite atingido
        return { success: false, remaining: 0, resetAt: existing.resetAt };
      }

      // Incrementa contagem
      existing.count += 1;
      cache.set(identifier, existing);
      return {
        success: true,
        remaining: options.limit - existing.count,
        resetAt: existing.resetAt,
      };
    },
  };
}

// Instância para o formulário de contato: 5 req / 10 min por IP
export const contactRateLimiter = createRateLimiter({
  interval: 10 * 60 * 1000, // 10 minutos
  limit: 5,
});
