from datetime import datetime
import streamlit as st
import pandas as pd
# import json
from util import schema_data, schema_face
from sqlalchemy import desc, column

st.set_page_config(page_title = "捏脸", layout = "wide")

last = schema_data.select().order_by(desc('id')).limit(1).execute()
start = last.one()['id']

N = 30
checked = [False] * N

def routine():
    st.write(start)

    data = pd.read_sql_query(
        schema_face.select().where(column('id') > start).limit(N),
        con = schema_face.bind)

    cols = st.columns(5)
    checks = [False] * N

    with st.form("my_form"):
        for i in range(int(N/5)):
            for j in range(5):
                with cols[j]:
                    st.image(
                        data.iloc[i*5+j]['svg'], use_column_width=True)
                    st.write(data.iloc[i*5+j]['score'])
                    checks[i*5+j] = st.checkbox(str(data.iloc[i*5+j]['id']))

        submitted = st.form_submit_button("Submit")
        if submitted:
            pd.DataFrame(dict(
                id = data['id'],
                check = checks,
                _utime = datetime.now()
            )).to_sql(
                'data',
                con=schema_data.bind,
                if_exists="append",
                index=False,
            )
            st.success('success!')

routine()