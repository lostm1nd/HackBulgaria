import Data.Monoid
import Control.Applicative

newtype Writer w a = Writer { runWriter :: (a, w) }

execWriter :: Writer w a -> w
execWriter (Writer (a, w)) = w

mapWriter :: ((a, w) -> (b, w')) -> Writer w a -> Writer w' b
mapWriter f = Writer . f . runWriter

tell :: w -> Writer w ()
tell = Writer . (,) ()

-- return :: a -> Writer w a
-- (>>=)  :: Writer w a -> (a -> Writer w b) -> Writer w b
instance Monoid w => Monad (Writer w) where
	return a = Writer (a, mempty)
	Writer (a, w) >>= fn = Writer (a', mappend w w')
		where (Writer (a', w')) = fn a

-- fmap :: (a -> b) -> Writer w a -> Writer w b
instance Functor (Writer w) where
	fmap f (Writer (a, w)) = Writer (f a, w)

-- pure  :: a -> f a
-- (<*>) :: Writer w (a -> b) -> Writer w a -> Writer w b
instance Monoid w => Applicative (Writer w) where
	pure = return
	(Writer (a2b, w)) <*> (Writer (a, w')) = Writer (a2b a, mappend w w')
