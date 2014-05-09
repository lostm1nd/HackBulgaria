using System;

class ReduceFilePath
{
    static void Main()
    {
        string path = Console.ReadLine();

        string reduced = reduce_file_path(path);

        Console.WriteLine(reduced);
    }

    static string reduce_file_path(string path)
    {
        string result = path;

        while (result.IndexOf("/..") > 0)
        {
            int deleteEnd = result.IndexOf("/..");
            int deleteStart = result.LastIndexOf('/', deleteEnd - 1);

            result = result.Remove(deleteEnd, 3);
            result = result.Remove(deleteStart, deleteEnd - deleteStart);                
        }

        result = result.Replace(".", string.Empty);
        result = result.Replace("//", "/");

        while (result.Length > 1 && result[result.Length - 1] == '/')
        {
            result = result.Remove(result.Length - 1);
        }            

        return result;
    }
}