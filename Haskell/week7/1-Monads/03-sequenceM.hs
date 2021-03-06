sequenceM :: Monad m => [m a] -> m [a]
sequenceM [] = return []
sequenceM (m:ms) = m >>= (\a -> sequenceM ms >>= (return . (:) a))
