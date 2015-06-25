import Data.Char

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
-- unzip' :: [(a,b)] -> ([a], [b])
-- unzip' x = ([x1:[] | (x1,_) <- x], [x2:[] | (_,x2) <- x])

-- task 36
group' :: Eq a => [a] -> [[a]]
group' [] = []
group' [x] = [[x]]
group' (x:y:ys)
	| x == y = [[x,y]] ++ group' ys
	| otherwise =  [[x]] ++ group' (y:ys)

-- task 37
-- pyths :: Int -> Int -> [(Int, Int, Int)]
-- pyths from to = filter isPyth [from..to]
-- 	where isPyth a b c = a^2 + b^2 == c^2

-- task 38
multiplyBy :: Num a => a -> (a -> a)
multiplyBy x = \y -> x * y

-- task 39
lastDigits :: Integral a => [a] -> [a]
lastDigits [] = []
lastDigits (x:xs) = (mod x 10) : lastDigits xs

-- task 40
stringsToIntegers :: [String] -> [Int]
stringsToIntegers = map fst . map (foldr parse (0,1))
	where parse = (\x acc -> (fst acc + snd acc * (digitToInt x), snd acc * 10 ))
