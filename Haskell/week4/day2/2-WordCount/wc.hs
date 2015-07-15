import System.Environment

type Content = String
type Mode = String
count :: Content -> Mode -> Int
count c m
	| m == "-l" = length $ lines c
	| m == "-w" = length $ words c
	| m == "-c" = sum $ map length $ words c

main = do
	(fileName:mode:_) <- getArgs
	contents <- readFile fileName
	print $ count contents mode
