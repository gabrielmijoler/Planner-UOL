import Cadastro from '../container/Cadastro/index';


describe('signUpUser', () => {
  test('should return success message if user is created', async () => {
    // Arrange
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      birthDate: '2000-01-01',
      city: 'New York',
      country: 'USA',
    };
    // Mock axios post request
    const mockedPost = jest.fn().mockResolvedValue({ data: { _id: 'user_id' } });
    const mockedInstance = jest.fn(() => ({ post: mockedPost }));
    const expectedMessage = { message: 'Usuário cadastrado com sucesso', type: 'success' };

    // Act
    const result = await Cadastro(userData, mockedInstance);

    // Assert
    expect(result).toEqual(expectedMessage);
    expect(mockedInstance).toHaveBeenCalledWith({ baseURL: 'https://latam-challenge-2.deta.dev/api/v1/', headers: { 'Content-Type': 'application/json' } });
    expect(mockedPost).toHaveBeenCalledWith('users/sign-up', userData);
  });

  test('should return error message if user is not created', async () => {
    // Arrange
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      birthDate: '2000-01-01',
      city: 'New York',
      country: 'USA',
    };
    // Mock axios post request
    const errorMessage = 'Erro ao cadastrar usuário';
    const errorResponse = { response: { data: errorMessage } };
    const mockedPost = jest.fn().mockRejectedValue(errorResponse);
    const mockedInstance = jest.fn(() => ({ post: mockedPost }));
    const expectedMessage = { message: errorMessage, type: 'error' };

    // Act
    const result = await Cadastro(userData, mockedInstance);

    // Assert
    expect(result).toEqual(expectedMessage);
    expect(mockedInstance).toHaveBeenCalledWith({ baseURL: 'https://latam-challenge-2.deta.dev/api/v1/', headers: { 'Content-Type': 'application/json' } });
    expect(mockedPost).toHaveBeenCalledWith('users/sign-up', userData);
  });
});
