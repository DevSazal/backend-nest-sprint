import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('DeveloperController (e2e)', () => {
  let app: INestApplication;
  const headers = {
    'Content-Type': 'application/json',
  };
  let id: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('v1');
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  // create a developer
  describe('POST /v1/developers', () => {
    it('should create a new developer with valid request', async () => {
      const response = await request(app.getHttpServer())
        .post(`/v1/developers`)
        .set(headers)
        .send({
          name: 'Olha Gaievska',
          email: 'tester@mail.com',
          level: 'senior',
        });

      expect(response.status).toBe(201);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body._id).toBeDefined();
      id = response.body._id;
    });

    it('should return failed with invalid request to create developer', async () => {
      const response = await request(app.getHttpServer())
        .post(`/v1/developers`)
        .set(headers)
        .send({
          name: '',
          email: '',
          level: 'backend',
        });

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toEqual({
        statusCode: 400,
        message: [
          'name must be longer than or equal to 3 characters',
          'email should not be empty',
          'email must be an email',
          'level must be one of the following values: junior, senior',
        ],
        error: 'Bad Request',
      });
    });
  });

  // return all developers
  describe('GET /v1/developers', () => {
    it('should return all the developers with valid request', async () => {
      const response = await request(app.getHttpServer())
        .get(`/v1/developers`)
        .set(headers)
        .send();

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // return a specific developer
  describe('GET /v1/developers/{id}', () => {
    it('should return the specific developer with valid id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/v1/developers/${id}`)
        .set(headers)
        .send();

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body._id).toBeDefined();
      expect(response.body.name).toBeDefined();
      expect(response.body.email).toBeDefined();
      expect(response.body.level).toBeDefined();
    });

    it('should return failed for the wrong developer id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/v1/developers/${id}e404`)
        .set(headers)
        .send();

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('Not Found');
      expect(response.body.message).toEqual('developer not found!');
    });
  });

  // filter by level
  describe('POST /v1/developers/filter', () => {
    it('should return the filtered developers by level', async () => {
      const response = await request(app.getHttpServer())
        .post(`/v1/developers/filter`)
        .set(headers)
        .send({ level: 'senior' });

      expect(response.status).toBe(201);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // edit a developer
  describe('PUT /v1/developers/{id}', () => {
    it('should update the developer information with valid request', async () => {
      const response = await request(app.getHttpServer())
        .put(`/v1/developers/${id}`)
        .set(headers)
        .send({ email: 'olhag@mail.com', level: 'junior' });

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
    });

    it('should return failed to update for a wrong developer id', async () => {
      const response = await request(app.getHttpServer())
        .put(`/v1/developers/${id}e404`)
        .set(headers)
        .send({ email: 'olhag@mail.com', level: 'junior' });

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('Not Found');
    });

    it('should return failed with invalid request to update developer', async () => {
      const response = await request(app.getHttpServer())
        .put(`/v1/developers/${id}`)
        .set(headers)
        .send({ level: 'lead' });

      expect(response.status).toBe(400);
      expect(response.body.error).toEqual('Bad Request');
      expect(response.body.message[0]).toEqual(
        'level must be one of the following values: junior, senior',
      );
    });
  });

  // delete a developer
  describe('DELETE /v1/developers/{id}', () => {
    it('should delete successfully the developer with valid id', async () => {
      const response = await request(app.getHttpServer())
        .delete(`/v1/developers/${id}`)
        .set(headers)
        .send();

      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('The data has been deleted successfully');
    });

    it('should return failed to delete for a wrong developer id', async () => {
      const response = await request(app.getHttpServer())
        .delete(`/v1/developers/${id}`)
        .set(headers)
        .send();

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('Not Found');
      expect(response.body.message).toEqual('failed to delete developer!');
    });
  });
});
