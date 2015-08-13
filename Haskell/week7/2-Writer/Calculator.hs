module Calculator where

import Writer

calculate :: String -> Integer
calculate = head . foldl parse [] . words

calculateLog :: String -> String
calculateLog = execWriter . foldl parseLog (Writer ([], "")) . words

parse :: [Integer] -> String -> [Integer]
parse (x:y:zs) "+" = (y + x) : zs
parse (x:y:zs) "-" = (y - x) : zs
parse (x:y:zs) "*" = (y * x) : zs
parse (x:y:zs) "/" = (div y x) : zs
parse (x:y:zs) "%" = (mod y x) : zs
parse zs token = read token : zs

parseLog :: Writer String [Integer] -> String -> Writer String [Integer]
parseLog w@(Writer (x:y:zs, s)) "+" = do
	w
	tell $ show y ++ "+" ++ show x ++ "\n"
	return $ (y + x) : zs
parseLog w@(Writer (zs, s)) token = do
	w
	tell $ "stack " ++ show token ++ "\n"
	return $ read token : zs
