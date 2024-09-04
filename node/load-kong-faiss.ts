import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAIEmbeddings } from "@langchain/openai";
import "faiss-node";
import "dotenv/config";
import fetch from './fetch'

async function run() {
  const directory = "../db/kongyiji";
  const embeddings = new OpenAIEmbeddings({}, { fetch });
  const vectorstore = await FaissStore.load(directory, embeddings);

  const retriever = vectorstore.asRetriever(2);
  const res = await retriever.invoke("茴香豆是做什么用的");

  console.log(res);
}

run();
