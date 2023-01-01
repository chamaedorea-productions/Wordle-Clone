USERNAME_MIN_LEN = 8
USERNAME_MAX_LEN = 16
USERNAME_VALID_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"

PASSWORD_MIN_LEN = 8
PASSWORD_MAX_LEN = 32
PASSWORD_VALID_CHARS = USERNAME_VALID_CHARS + "äöüÄÖÜß-!§$%&()=?{[]}^°<>|#+*~;:,."

BCRYPT_HASH_LEN = 60
SALT_LEN = 16

REMEMBER_USER = True