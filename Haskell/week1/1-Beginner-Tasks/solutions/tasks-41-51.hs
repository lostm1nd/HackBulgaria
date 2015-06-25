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
