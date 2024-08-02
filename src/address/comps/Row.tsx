import { Layout, Txt } from "@motion-canvas/2d";

export function RowItem(props: { title: string; subtitle: string }) {
  return (
    <Layout layout marginTop={50} direction={"column"} width={"100%"}>
      <Txt fontSize={50} fill={"white"}>
        {props.title}
      </Txt>
      <Txt fontSize={30} fill={"white"}>
        {props.subtitle}
      </Txt>
    </Layout>
  );
}
