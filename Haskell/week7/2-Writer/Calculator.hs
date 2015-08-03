module Calculator where

calculate :: String -> Integer
calculate = head . foldl parse [] . words

parse :: [Integer] -> String -> [Integer]
parse (x:y:zs) "+" = (y + x) : zs
parse (x:y:zs) "-" = (y - x) : zs
parse (x:y:zs) "*" = (y * x) : zs
parse (x:y:zs) "/" = (div y x) : zs
parse (x:y:zs) "%" = (mod y x) : zs
parse zs token = read token : zs
