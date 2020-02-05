using System;
using System.Collections.Generic;
using System.Text;

namespace RandomFeeders.Extensions
{
    public static class StringExtension
    {
        public static byte[] ToByteArray(this string str, UTF8Encoding utf8 = null)
        {
            if (utf8 == null)
                return Convert.FromBase64String(str);
            else
                return utf8.GetBytes(str);
        }
    }
}
