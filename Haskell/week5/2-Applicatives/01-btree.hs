data BTree a = Nil | Leaf a | Node a (BTree a) (BTree a)
	deriving (Show)

-- fmap :: (a -> b) -> BTree a -> BTree b
instance Functor BTree where
	fmap _ Nil = Nil
	fmap f (Leaf x) = Leaf (f x)
	fmap f (Node x l1 l2) = Node (f x) (fmap f l1) (fmap f l2)
