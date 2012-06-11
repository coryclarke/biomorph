require 'test_helper'

class GenomesControllerTest < ActionController::TestCase
  setup do
    @genome = genomes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:genomes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create genome" do
    assert_difference('Genome.count') do
      post :create, genome: { angle: @genome.angle, length: @genome.length, lengthmult: @genome.lengthmult, recbias: @genome.recbias, recursion: @genome.recursion, spread: @genome.spread, spreadmult: @genome.spreadmult }
    end

    assert_redirected_to genome_path(assigns(:genome))
  end

  test "should show genome" do
    get :show, id: @genome
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @genome
    assert_response :success
  end

  test "should update genome" do
    put :update, id: @genome, genome: { angle: @genome.angle, length: @genome.length, lengthmult: @genome.lengthmult, recbias: @genome.recbias, recursion: @genome.recursion, spread: @genome.spread, spreadmult: @genome.spreadmult }
    assert_redirected_to genome_path(assigns(:genome))
  end

  test "should destroy genome" do
    assert_difference('Genome.count', -1) do
      delete :destroy, id: @genome
    end

    assert_redirected_to genomes_path
  end
end
