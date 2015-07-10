{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

data List a = Nil | Cons (a) (List a)
	deriving (Show)

type IntList = List Int

safeHead :: IntList -> Maybe Int
safeHead (Cons x xs) = Just x
safeHead _ = Nothing

safeTail :: IntList -> Maybe Int
safeTail (Cons x Nil) = Just x
safeTail (Cons x xs) = safeTail xs
safeTail Nil = Nothing

safeNth :: Int -> IntList -> Maybe Int
safeNth i xs = findNth 0 xs
	where
		findNth idx (Cons y ys) = if idx == i then Just y else findNth (idx + 1) ys
		findNth _ _ = Nothing
