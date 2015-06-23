import Data.Char (chr, ord)

-- task 22
sumMe :: Num x => [x] -> x
sumMe (x:xs) = x + sumMe xs
sumMe [] = 0

-- task 23
productList ::  Num x => [x] -> x
productList (x:xs) = x * productList xs
productList [] = 1

-- task 24
multLists :: Num a => [a] -> [a] -> [a]
multLists (x:xs) (y:ys) = (x * y) : multLists xs ys
multLists [] _ = []
multLists _ [] = []

-- task 25
num2char :: Int -> String
num2char x = show x
