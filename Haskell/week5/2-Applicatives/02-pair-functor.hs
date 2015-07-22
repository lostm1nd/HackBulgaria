
-- fmap :: (b -> c) -> (a. b) -> (a. c)
instance Functor ((,) a) where
	fmap f (x, y) = (x, f y)
