sequenceM :: Monad m => [m a] -> m [a]
sequenceM [] = return []
sequenceM (m:ms) = m >>= (\a -> sequenceM ms >>= (return . (:) a))

replicateM :: Monad m => Int -> m a -> m [a]
replicateM x = sequenceM . replicate x
