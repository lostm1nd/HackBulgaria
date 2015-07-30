join :: Monad m => m (m a) -> m a
join ms = ms >>= (\m -> m)
