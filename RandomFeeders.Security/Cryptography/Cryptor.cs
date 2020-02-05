using RandomFeeders.Extensions;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace RandomFeeders.Security.Cryptography
{
    public class Cryptor
    {
        private UTF8Encoding UTF8 { get; }
        private Random Random { get; }

        public Cryptor()
        {
            UTF8 = new UTF8Encoding();
            Random = new Random(new Random().Next());
        }

        private byte[] Crypt(byte[] message, byte[] phrase, Func<TripleDES, ICryptoTransform> cryptoGenerator)
        {
            ICryptoTransform crypto;

            using (var tdes = TripleDES.Create())
            {
                tdes.Key = GenerateHash(phrase);
                tdes.Mode = CipherMode.ECB;
                tdes.Padding = PaddingMode.PKCS7;
                crypto = cryptoGenerator?.Invoke(tdes);
            }

            if (crypto != null)
                return crypto.TransformFinalBlock(message, 0, message.Length);

            return new byte[0];
        }

        public byte[] Encrypt(byte[] message, byte[] phrase) => Crypt(message, phrase, x => x.CreateEncryptor());

        public string Encrypt(string message, string phrase) => Convert.ToBase64String(Encrypt(UTF8.GetBytes(message), phrase.ToByteArray(UTF8)));

        public byte[] Decrypt(byte[] message, byte[] phrase) => Crypt(message, phrase, x => x.CreateDecryptor());

        public string Decrypt(string message, string phrase) => UTF8.GetString(Decrypt(Convert.FromBase64String(message), phrase.ToByteArray(UTF8)));

        public dynamic GenerateHash<TResult>(byte[] value)
        {
            byte[] result = null;

            using (var md5 = MD5.Create())
            {
                result = md5.ComputeHash(value);
            }

            if (result == null || result.Length == 0) return null;
            else if (typeof(TResult) == typeof(string)) return Convert.ToBase64String(result);
            else if (typeof(TResult) == typeof(byte[])) return result;
            else throw new ArgumentException($"Type argument {typeof(TResult).Name} is not valid");
        }

        public byte[] GenerateHash(byte[] value) => GenerateHash<byte[]>(value);
        public string GenerateHash(string value) => GenerateHash<string>(UTF8.GetBytes(value));

        public string GeneratePhrase(int length = 35, string chrs = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789")
        {
            var temp = "";

            for (int i = 0; i < length; i++)
            {
                temp += chrs[Random.Next(chrs.Length)];
            }

            return temp;
        }

    }
}
