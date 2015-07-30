data List a = Nil | Cons a (List a)
	deriving (Show)

glue :: List a -> List a -> List a
glue (Cons x xs) ys = Cons x (glue xs ys)
glue Nil ys = ys

flatten :: List (List a) -> List a
flatten (Cons x xs) = glue x (flatten xs)
flatten Nil = Nil

-- fmap :: (a -> b) -> List a -> List b
instance Functor List where
	fmap _ Nil = Nil
	fmap f (Cons x xs) = Cons (f x) (fmap f xs)

-- instance Monad Maybe where
-- 	return = Just
-- 	Nothing >>= _ = Nothing
-- 	Just x >>= fn = fn x

instance Monad List where
	return x = Cons x Nil
	Nil >>= _ = Nil
	xs >>= fn = flatten $ fmap fn xs
