main = do
	(fileName:_) <- getArgs
	contents <- readFile fileName

extractFunc :: String -> [(String, String)]
extractFunc s = foldl (take 1 . words) . lines s

addToMap :: [(String, String)] -> String -> [(String, String)]
addToMap m s = if lookup s m == Nothing
				then (s, "") : m
				else m
