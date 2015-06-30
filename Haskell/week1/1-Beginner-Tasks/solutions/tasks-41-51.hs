{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

-- task 42
applyToAll :: (a -> b) -> [a] -> [b]
applyToAll f = map f

-- task 44
odds :: [Int] -> [Int]
odds = filter odd

-- task 45
divisibles :: Int -> [Int] -> [Int]
divisibles x = filter $ (== 0) . (`mod` x)

-- task 46
filterBy :: (a -> Bool) -> [a] -> [a]
filterBy p = filter p

-- task 48
concat' :: [[a]] -> [a]
concat' = foldr (\x acc -> foldr (\x acc1 -> x : acc1) acc x) []

-- task 49
reduce :: (b -> a -> b) -> b -> [a] -> b
reduce f acc (x:xs) = reduce f (f acc x) xs
reduce _ acc _ = acc

-- task 50
reduce' :: (a -> b -> b) -> b -> [a] -> b
reduce' f acc xs@(x:_) = reduce' f (f (head reversed) acc) (reverse . tail $ reversed)
	where reversed = reverse xs
reduce' _ acc _ = acc

-- task 51
zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' f (a:as) (b:bs) = f a b : zipWith' f as bs
zipWith' _ _ _ = []
