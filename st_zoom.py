from util import get_svg
# import json
import streamlit as st

from zoom import get_vars, get_data_by_id, names, get_diff

st.set_page_config(page_title = "捏脸zoom", layout = "wide")

N = 100
my_bar = st.progress(0)

@st.cache
def get_ll(p0):
    varRate = {name: 0.3 for name in names}
    varRate['sex'] = 0
    varRate['dress'] = 0.8

    pp = get_vars(p0, varRate, 1000, N).reset_index(drop=True)

    ll = []
    for index, value in pp.iterrows():
        my_bar.progress(int(index / (len(pp)-1) * 100))
        ll.append(dict(
            index = index,
            params = value.to_dict(),
            svg = get_svg(value.to_dict()),
        ))

    return ll

params = get_data_by_id(23966)
params['eyebrow'] = 130781
params['dress'] = 130781 # 31600  # 30340
st.image(get_svg(params), width=600)

print(params)
ll = get_ll(params)

cols = st.columns(5)
checks = [False] * N

index = st.selectbox('', range(len(ll)))
if index != 0:
    # print(ll[int(index)])
    # print(get_diff(params, ll[int(index)]['params']))
    st.write(
        get_diff(params, ll[int(index)]['params'])
    )

with st.form("my_form"):
    for i in range(int(N/5)):
        for j in range(5):
            with cols[j]:
                # print(i,j,i*5+j, len(ll))
                st.image(ll[i*5+j]['svg'], use_column_width=True)
                st.write(ll[i*5+j]['index'])
                # checks[i*5+j] = st.checkbox(str(ll[i*5+j]['index']))

    submitted = st.form_submit_button("Submit")
    if submitted:
        # pd.DataFrame(dict(
        #     id = data['id'],
        #     check = checks,
        #     _utime = datetime.now()
        # )).to_sql(
        #     'data',
        #     con=schema_data.bind,
        #     if_exists="append",
        #     index=False,
        # )
        st.success('success!')

# show_svg(pp.iloc[11].to_dict())

# get_diff(p0, pp.iloc[56].to_dict())