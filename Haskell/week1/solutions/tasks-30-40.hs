-- task 30
concatenate :: [a] -> [a] -> [a]
concatenate xs ys = xs ++ ys

-- task 31
init' :: [a] -> [a]
init' list@(x:xs)
	| length list == 0 = error "You can't do that with the empty list!"
	| length list == 1 = []
	| otherwise = x : init' xs

-- task 32
take' :: Int -> [a] -> [a]
take' 0 _ = []
take' _ [] = []
take' count (x:xs) = x : take (count-1) xs

-- task 33
drop' :: Int -> [a] -> [a]
drop' 0 xs = xs
drop' _ [] = []
drop' count (x:xs) = drop' (count-1) xs

-- task 34
zip' :: [a] -> [b] -> [(a,b)]
zip' (x:xs) (y:ys) = (x,y) : zip' xs ys
zip' [] _ = []
zip' _ [] = []

-- task 35
unzip' :: [(a,b)] -> ([a], [b])
