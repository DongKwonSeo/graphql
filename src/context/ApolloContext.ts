export const ApolloContext = ({
  req,
}: {
  req: any;
}): ApolloContextInterface => {
  return {
    Authorization: req.headers.authorization,
  };
};

export interface ApolloContextInterface {
  Authorization: string | undefined;
}
