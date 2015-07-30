sequenceM :: Monad m => [m a] -> m [a]
sequenceM ms = map (>>) ms
