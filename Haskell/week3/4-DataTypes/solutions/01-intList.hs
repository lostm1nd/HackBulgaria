{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

data IntList = Empty | Cons Int IntList
	deriving (Show)

fromList :: [Int] -> IntList
fromList (x:xs) = Cons x (fromList xs)
fromList _ = Empty


toList :: IntList -> [Int]
toList (Cons x xs) = x : toList xs
toList _ = []

filter' :: (Int -> Bool) -> IntList -> IntList
filter' p (Cons x xs)
	| p x = Cons x (filter' p xs)
	| otherwise = filter' p xs
filter' _ _ = Empty

fold' :: (Int -> Int -> Int) -> Int -> IntList -> Int
fold' f acc (Cons x xs) = fold' f (f acc x) xs
fold' _ acc _ = acc

map' :: (Int -> Int) -> IntList -> IntList
map' f (Cons x xs) = Cons (f x) (map' f xs)
map' _ _ = Empty
