describe('upperFilter', () => {

  let $filter;
  beforeEach(() => {
    module('app');
    inject((_$filter_) => {
      $filter = _$filter_;
    })
  });

  it('should work', () => {
    let upperFilter = $filter('upper');
    expect(upperFilter('aaa')).toEqual('AAA');
    expect(upperFilter('aaa', true)).toEqual('AAA!!!');
  })
});
