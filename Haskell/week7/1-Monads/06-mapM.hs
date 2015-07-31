sequenceM :: Monad m => [m a] -> m [a]
sequenceM [] = return []
sequenceM (m:ms) = m >>= (\a -> sequenceM ms >>= (return . (:) a))

mapMM :: Monad m => (a -> m b) -> [a] -> m [b]
mapMM f = sequenceM . map f
