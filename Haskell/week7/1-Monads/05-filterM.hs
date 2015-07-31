filterM :: Monad m => (a -> m Bool) -> [a] -> m [a]
filterM _ [] = return []
filterM p (x:xs) = p x >>= (\b -> case b of
				True -> filterM p xs >>= (return . (:) x)
				False -> filterM p xs)
