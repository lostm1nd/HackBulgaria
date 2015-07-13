import System.Environment

main = do
	files <- getArgs
	contents <- mapM readFile files
	putStrLn (unlines contents)
