{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

-- task 1
mapWithFoldl :: (a -> b) -> [a] -> [b]
mapWithFoldl f xs = foldl (\acc y -> acc ++ [f y]) [] xs

-- task 2
filterWithFoldl :: (a -> Bool) -> [a] -> [a]
filterWithFoldl p xs = foldl (\acc y -> if p y then acc ++ [y] else acc) [] xs

-- task 3
quicksort :: Ord a => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = (smaller) ++ [x] ++ (bigger)
	where
		smaller = quicksort $ filter (< x) xs
		bigger = quicksort $ filter (>= x) xs

-- task 4
repeat' :: Enum a => a -> [a]
repeat' x = [x,x..]

-- task 5
cycle' :: [a] -> [a]
cycle' [] = []
cycle' xs = xs ++ cycle xs

-- task 6
every :: Int -> [a] -> [a]
every 0 _ = []
every a xs =  map snd $ filter (\(idx, el) -> mod idx a == 0) $ zip [1..length xs] xs

-- task 7
localMaxima :: [Integer] -> [Integer]
localMaxima (x:y:z:zs)
	| x < y && y > z = y : localMaxima (y:z:zs)
	| otherwise = localMaxima (y:z:zs)
localMaxima _ = []

-- task 8
mapMap :: (a -> b) -> [[a]] -> [[b]]
mapMap f (x:xs) = [map f x] ++ mapMap f xs
mapMap _ _ = []

-- task 9
filterFilter :: (a -> Bool) -> [[a]] -> [[a]]
filterFilter p (x:xs) = [filter p x] ++ filterFilter p xs
filterFilter _ _ = []

-- task 10
-- unit :: Int -> Int -> [[Int]]
unit num size = map constructList [0..size-1]
	where constructList pos = (take pos $ repeat 0) ++ [num] ++ (take (size-pos-1) $ repeat 0)

-- task 11
row :: Int -> [[a]] -> [a]
row 0 (y:_) = y
row _ [] = []
row x (y:ys) = row (x-1) ys

-- task 12
transpose' :: [[a]] -> [[a]]
transpose' ([]:_) = []
transpose' xs = [foldMe xs] ++ transpose' (map tail xs)
	where foldMe = foldr (\y acc -> head y : acc) []

-- task 13
sumMatrices :: Num a => [[a]] -> [[a]] -> [[a]]
sumMatrices (x:xs) (y:ys) = zipWith (+) x y : sumMatrices xs ys
sumMatrices _ _ = []
