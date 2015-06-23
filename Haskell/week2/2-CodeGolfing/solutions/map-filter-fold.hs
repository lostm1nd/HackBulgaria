map' :: (a -> b) -> [a] -> [b]
map' _ [] = []
map' f (x:xs) = f x : map' f xs

filter' :: (a -> Bool) -> [a] -> [a]
filter _ [] = []
filter' f (x:xs) = if f x then x : filter' f xs else filter' f xs

fold' :: (a -> b -> a) -> b -> [a] -> b
fold' _ acc [] = acc
fold' _ _ (x:[]) = x
fold' f acc (x:y:ys) = fold' f (f x y) ys
