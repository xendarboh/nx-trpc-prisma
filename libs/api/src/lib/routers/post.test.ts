// /**
//  * Integration test example for the `post` router
//  */
// import { createContextInner } from '../context';
// import { appRouter } from './_app';
// import { inferMutationInput } from '~/utils/trpc';

// test('add and get post', async () => {
//   const ctx = await createContextInner({});
//   const caller = appRouter.createCaller(ctx);

//   const input: inferMutationInput<'post.add'> = {
//     text: 'hello test',
//     title: 'hello test',
//   };

//   const post = await caller.mutation('post.add', input);
//   const byId = await caller.query('post.byId', { id: post.id });

//   expect(byId).toMatchObject(input);

//   /**
//    * ❓ QUESTION: How should we do server-side calls?
//    * The plan is to make this API possible:
//    * ```ts
//    * await appRouter.post.add.call({ input, ctx })
//    * await appRouter.post.byId.call({ input, ctx })
//    * ```
//    * Is this good? If not, what's a good alternative?
//    */
// });

// at least one test required
describe('placeholder', () => {
  it('should do nothing', () => {
    const x = true;
    expect(x).toBeTruthy();
  });
});
