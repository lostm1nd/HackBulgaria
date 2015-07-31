foldM :: Monad m => (a -> b ->  m a) -> a -> [b] ->  m a
foldM _ acc [] = return acc
foldM f acc (x:xs) = f acc x >>= (\acc' -> foldM f acc' xs)
