module Fractals where

import Data.Complex (Complex(..), magnitude)

type Fractal = Int -> Int -> Int
type Point = Complex Double
type Coordinate = (Double, Double)

-- Number of iterations after which we say that a point doesn't diverge
maxIterations :: Num a => a
maxIterations = 127

-- The part of the fractal we want to see
window :: (Coordinate, Coordinate)
window = ((-1.5, 1.5), (1.5, -1.5))

-- Mapping a pixel to a coordinate
pixelToCoordinate :: Int -> Int -> Int -> Int -> (Coordinate, Coordinate) -> Coordinate
pixelToCoordinate w h x y ((minx, maxy), (maxx, miny)) =
    ((minx + xProportion * xRange), (miny + yProportion * yRange))
    where
        xProportion = fromIntegral x / fromIntegral w
        yProportion = fromIntegral y / fromIntegral h
        xRange = maxx - minx
        yRange = maxy - miny

mandelbrot :: Point -> Point -> Int -> Int
mandelbrot c z iter
    | magnitude z > 2 = iter
    | iter <= maxIterations = mandelbrot c (z^2 + c) (iter + 1)
    | otherwise = iter

drawMandelbrot :: Int -> Int -> Int -> Int -> Int
drawMandelbrot w h x y = mandelbrot (x' :+ y') (0 :+ 0) 0
  where (x', y') = pixelToCoordinate w h x y window
