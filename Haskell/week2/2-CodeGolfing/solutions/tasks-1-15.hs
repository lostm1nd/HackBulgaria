-- task 1
mapWithFoldl :: (a -> b) -> [a] -> [b]
mapWithFoldl f xs = foldl (\acc y -> acc ++ [f y]) [] xs

-- task 2
filterWithFold :: (a -> Bool) -> [a] -> [a]
filterWithFold p xs = foldl (\acc y -> if p y then acc ++ [y] else acc) [] xs

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
every 0 xs = []
every 1 xs = xs
every a xs = helpMe 1 [] xs
	where
		helpMe _ _ [] = []
		helpMe c acc (y:ys) = if a == c then helpMe 1 (acc ++ [y]) ys else helpMe (c+1) acc ys
