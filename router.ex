defmodule Httpserver.Router do
  use Plug.Router
  plug :match
  plug :dispatch
  get "/" do
    send_resp(conn,200,"Welcome to my Api")
  end
  get "/:name" do
    send_resp(conn,200,"welcome #{name}")
  end
  match _ do
    send_resp(conn,404,"Bad Request")
  end
end
