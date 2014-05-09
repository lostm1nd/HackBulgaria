using System;
using System.Collections.Generic;

class GoldbachConjecture
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());

        var tuples = goldbach(number);

        // format output
        Console.Write("[");
        for (int i = 0; i < tuples.Count; i++)
        {
            Console.Write("(" + tuples[i].Item1 + ", " + tuples[i].Item2 + ")");

            if (i != tuples.Count - 1)
            {
                Console.Write(", ");
            }
        }
        Console.WriteLine("]");
    }

    static List<Tuple<int, int>> goldbach(int value)
    {
        List<Tuple<int, int>> tuples = new List<Tuple<int, int>>();
        List<int> primes = GetPrimes(value);

        for (int i = 0; i < primes.Count; i++)
        {
            if (primes.Contains(value - primes[i]) && primes[i] <= value - primes[i])
            {
                tuples.Add(new Tuple<int, int>(primes[i], value - primes[i]));
            }
        }

        return tuples;
    }

    static List<int> GetPrimes(int range)
    {
        bool prime = true;
        List<int> primes = new List<int>();
        primes.Add(2);
        primes.Add(3);

        for (int i = 4; i <= range; i++)
        {
            prime = true;

            for (int j = 2; j <= Math.Sqrt(i); j++)
            {
                if (i % j == 0)
                {
                    prime = false;
                    break;
                }
            }

            if (prime)
            {
                primes.Add(i);
            }
        }

        return primes;
    }
}