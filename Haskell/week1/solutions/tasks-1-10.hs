-- task 1
evenMy :: Int -> Bool
evenMy x = mod x 2 == 0

-- task 2
oddMy :: Int -> Bool
oddMy x = mod x 2 == 1

-- task 3
bmi :: Double -> Double -> Double
bmi h w = w / (h^2)

-- task 4
deg2rad :: Double -> Double
deg2rad deg = deg * (pi / 180)

-- task 5
isTriangle a b c = (a + b > c) && (a + c > b) && (b + c > a)

-- task 6
perimeter a b c = if isTriangle a b c
					then a + b + c
					else error "This is not a triangle"

-- task 7
halfPerimeter a b c = (perimeter a b c) / 2

-- task 8
triangleArea a b c = sqrt ( (halfPerimeter a b c) *
							(halfPerimeter a b c - a) *
							(halfPerimeter a b c - b) *
							(halfPerimeter a b c - c)
						)

-- task 9
calculate op x y
 				| op == '+' = x + y
				| op == '*' = x * y
				| op == '-' = x - y
				| otherwise = error "Not implemented"

-- task 10
convert from to amount
					| from == "usd" && to == "bgn" = amount * 1.737
					| from == "eur" && to == "bgn" = amount * 1.959
					| from == "bgn" && to == "usd" = amount / 1.737
					| from == "bgn" && to == "eur" = amount / 1.959
