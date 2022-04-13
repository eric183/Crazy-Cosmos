import { rest } from 'msw';

const PAAS_ORIGIN = 'develop.1024paas.com';
const method = 'POST';
const token = '';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        // username,
        // firstName: 'John',
        // lastName: 'Maverick',
      }),
    );
  }),

  rest.post(
    `${'https'}://${PAAS_ORIGIN}:${'/demo/users/login'}`,
    (req, res, ctx) => {
      // const { username } = req.body;

      return res(
        ctx.json({
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        }),
      );
    },
  ),
];
