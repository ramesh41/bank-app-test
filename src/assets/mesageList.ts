export const ERROR_MESSAGES = {
  signIn: {
    email: {
      required: 'Email Address is required.',
      minLength: 'Email length should be 5 charaters.',
      pattern:
        'Enter a valid email address”, you missed the “@” character — “Enter a valid email address.',
    },
    password: {
      required: 'Password is required.',
      minLength: 'User password should be at least 8 charaters.',
      pattern:
        'User password should be accept at least  one lowercas & uppercase and one number.',
    },
  },
  signUp: {
    username: {
      required: 'Beneficiary name is required.',
      minLength: 'Beneficiary name length should be 5 characters.',
      pattern: 'TBD',
    },
    bankAccountNumber: {
      required: 'Beneficiary account number is required.',
      minLength: 'Beneficiary account number length should be 16 digit.',
      pattern: 'TBD',
    },
    email: {
      required: 'Beneficiary email address is required.',
      minLength: 'Beneficiary email length should be 5 digit.',
      pattern:
        'Enter a valid Beneficiary email address”, you missed the “@” character — “Enter a valid email address.',
    },
    password: {
      required: 'Beneficiary password is required.',
      minLength: 'Beneficiary password length should be 5 digit.',
      pattern:
        'if the password contains the date of someone\'s birthday, one might enter the name of the person as the hint',
    },
  },

  forgotPassword: {
    email: {
      required: 'Email Address is required.',
      minLength: 'Email length should be 5 charaters.',
      pattern:
        'Enter a valid email address”, you missed the “@” character — “Enter a valid email address.',
    }
  }
};
