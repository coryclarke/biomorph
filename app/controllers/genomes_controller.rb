
class GenomesController < ApplicationController
  # GET /genomes
  # GET /genomes.json
  def index
    @genomes = Genome.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @genomes }
      format.xml { render xml: @genomes }
    end
  end

  # GET /genomes/1
  # GET /genomes/1.json
  def show
    @genome = Genome.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @genome }
    end
  end

  # GET /genomes/new
  # GET /genomes/new.json
  def new
    @genome = Genome.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @genome }
    end
  end

  # GET /genomes/1/edit
  def edit
    @genome = Genome.find(params[:id])
  end

  # POST /genomes
  # POST /genomes.json
  def create
    @genome = Genome.new(params[:genome])

    respond_to do |format|
      if @genome.save
        format.html { redirect_to @genome, notice: 'Genome was successfully created.' }
        format.json { render json: @genome, status: :created, location: @genome }
      else
        format.html { render action: "new" }
        format.json { render json: @genome.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /genomes/1
  # PUT /genomes/1.json
  def update
    @genome = Genome.find(params[:id])

    respond_to do |format|
      if @genome.update_attributes(params[:genome])
        format.html { redirect_to @genome, notice: 'Genome was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @genome.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /genomes/1
  # DELETE /genomes/1.json
  def destroy
    @genome = Genome.find(params[:id])
    @genome.destroy

    respond_to do |format|
      format.html { redirect_to genomes_url }
      format.json { head :no_content }
    end
  end
end
