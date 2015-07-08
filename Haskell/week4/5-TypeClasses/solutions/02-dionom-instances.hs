import Dionom

instance Dionom [a] where
	dempty = []
	dappend = (++)

newtype Sums a = Sums { getSum :: a }
	deriving (Show)

newtype Products a = Products { getProducts :: a }
	deriving (Show)

instance Num a => Dionom (Sums a) where
	dempty = Sums 0
	dappend (Sums x) (Sums y) = Sums (x + y)

instance Num a => Dionom (Products a) where
	dempty = Products 1
	dappend (Products x) (Products y) = Products (x * y)
