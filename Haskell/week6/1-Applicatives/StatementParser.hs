module StatementParser where

import Parser
import Statement
import Control.Applicative
import qualified Data.Char as C
  ( isAlpha
  , isDigit
  )

operPlus :: Parser Oper
operPlus = const Plus <$> char '+'

operMinus :: Parser Oper
operMinus = const Minus <$> char '-'

operMult :: Parser Oper
operMult = const Mult <$> char '*'

operDiv :: Parser Oper
operDiv = const Div <$> char '/'

operMod :: Parser Oper
operMod = const Mod <$> char '%'

operGt :: Parser Oper
operGt = const Gt <$> char '>'

operGe :: Parser Oper
operGe = const Ge <$> string ">="

operLt :: Parser Oper
operLt = const Lt <$> char '<'

operLe :: Parser Oper
operLe = const Le <$> string "<="

operEql :: Parser Oper
operEql = const Eql <$> string "=="

oper :: Parser Oper
oper = operPlus <|>
        operMinus <|>
        operMult <|>
        operDiv <|>
        operMod <|>
        operGt <|>
        operGe <|>
        operLt <|>
        operLe <|>
        operEql

variable :: Parser Variable
variable = oneOrMore (satisfy C.isAlpha)

value :: Parser Value
value =  read <$> (oneOrMore (satisfy C.isDigit))

exprVar :: Parser Expr
exprVar = Var <$> variable

exprVal :: Parser Expr
exprVal = Val <$> value

exprOp :: Parser Expr
exprOp = liftA3 Op expr oper expr

expr :: Parser Expr
expr = exprVar <|> exprVal <|> exprOp

assignP :: Parser Statement
assignP = liftA2 Assign (variable <* char '=') expr

incrP :: Parser Statement
incrP = Incr <$> (string "++" *> variable)

decrP :: Parser Statement
decrP = Decr <$> (string "--" *> variable)

ifP :: Parser Statement
ifP = liftA2 If
    (string "if" *> inBraces expr)
    (char '{' *> statement <* char '}')

forP :: Parser Statement
forP = For <$> (string "for" *> char '(' *> statement) <*>
        (char ';' *> expr) <*>
        (char ';' *> statement <* char ')') <*>
        (char '{' *> statement <* char '}')

statement :: Parser Statement
statement = assignP <|> incrP <|> decrP <|> ifP <|> forP

interpret :: Parser [Statement]
interpret = oneOrMore statement
