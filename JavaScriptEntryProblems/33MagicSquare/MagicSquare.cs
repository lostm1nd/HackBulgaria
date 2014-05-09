using System;

class MagicSquare
{
    static void Main()
    {
        string input = Console.ReadLine();

        int[,] matrix = MatrixParser(input);

        bool result = magic_square(matrix);

        Console.WriteLine(result);
    }

    static int[,] MatrixParser(string matrix)
    {
        // split the inner arrays
        string[] semiResult = matrix.Split(new string[] { "], [" }, StringSplitOptions.RemoveEmptyEntries);
        int[,] result = new int[semiResult.Length, semiResult.Length];

        // split all the numbers
        semiResult = matrix.Split(new char[] { '[', ']', ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);

        // fill the numbers in the matrix
        for (int row = 0, strCounter = 0; row < result.GetLength(0); row++)
        {
            for (int col = 0; col < result.GetLength(1); col++)
            {
                result[row, col] = int.Parse(semiResult[strCounter]);
                strCounter++;
            }
        }

        return result;
    }

    static bool magic_square(int[,] square)
    {
        bool isMagic = true;
        int magicSum = 0;

        // calculate the sum of the first row
        // that sum should appear on every row, column and main diagonal
        for (int i = 0; i < square.GetLength(1); i++)
        {
            magicSum += square[0, i];
        }

        // traverse and sum the rows
        // start from 1 because we calculated the first row already
        for (int row = 1; row < square.GetLength(0); row++)
        {
            int currentRowSum = 0;

            for (int col = 0; col < square.GetLength(1); col++)
            {
                currentRowSum += square[row, col];
            }

            if (currentRowSum != magicSum)
            {
                isMagic = false;
                return isMagic;
            }
        }

        // traverse and sum the columns
        for (int col = 0; col < square.GetLength(1); col++)
        {
            int currentColSum = 0;

            for (int row = 0; row < square.GetLength(0); row++)
            {
                currentColSum += square[row, col];
            }

            if (currentColSum != magicSum)
            {
                isMagic = false;
                return isMagic;
            }
        }

        // traverse diagonals
        int frontDiagonalSum = 0;
        int backDiagonalSum = 0;

        for (int diagonal = 0; diagonal < square.GetLength(0); diagonal++)
        {
            frontDiagonalSum += square[diagonal, diagonal];
        }

        for (int row = 0, col = square.GetLength(1) - 1; row < square.GetLength(0); row++, col--)
        {
            backDiagonalSum += square[row, col];
        }

        if (frontDiagonalSum != magicSum || backDiagonalSum != magicSum)
        {
            isMagic = false;
            return isMagic;
        }

        return isMagic;
    }
}