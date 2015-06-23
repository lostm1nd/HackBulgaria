-- task 12
perimeterList [] = error "Empty array not supported"
perimeterList [x] = x
perimeterList (x:xs) = x + perimeterList xs

-- task 13
headMy :: [a] -> a
headMy (x:_) = x

-- task 14
tailMy :: [a] -> [a]
tailMy (_:xs) = xs

-- task 15
calculate :: Char -> Int -> Int -> Int
calculate '+' x y = x + y
calculate '-' x y = x - y
calculate '*' x y = x * y
calculate _ x y = error "Not implemented"

-- task 16
lastMy :: [a] -> a
lastMy (x:xs) = lastMy xs
lastMy [x] = x
lastMy [] = error "Empty array not supported"

-- task 17
double :: Num a => [a] -> [a]
double (x:xs) = x * 2 : double xs
double [] = []

-- task 18
mult :: Num a => a -> [a] -> [a]
mult num (x:xs) = num * x : mult num xs
mult num [] = []

-- task 19
nth n (_:xs)
	| n < 0 = error "Invalid index"
	| otherwise = nth (n-1) xs
nth 0 (x:_) = x
nth _ [] = error "No such element"

-- task 20
member x (y:ys) = if x == y then True else member x ys
member _ [] = False

-- task 21
-- isFibSeq (x:xs) =

-- task 22
sumMe :: [x] -> x
sumMe (x:xs) = x + sumMe xs
sumMe [] = 0

-- task 23
productList :: [x] -> x
productList (x:xs) = x * productList xs
productList [] = 1
